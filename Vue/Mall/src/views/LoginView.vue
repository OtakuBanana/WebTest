<template>
    <div class="login-box">
        <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    status-icon
    :rules="rules"
    label-width="80px"
    class="demo-ruleForm"
  >
    <h1>后台管理登入界面</h1>
    <el-form-item prop="username"><font style="font-size: 20px;">账号</font>
        <el-input v-model="ruleForm.username" autocomplete="off" />
    </el-form-item>
    <el-form-item prop="password"><font style="font-size: 20px;">密码</font>
        <el-input v-model="ruleForm.password" type="password" autocomplete="off" />
    </el-form-item>
    <el-button type="primary" @click="submitForm(ruleFormRef)">登入</el-button>
    <el-button @click="resetForm">重置</el-button>
  </el-form>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, ref } from 'vue'
import { LoginData} from '../type/login'
import type { FormInstance, FormRules } from 'element-plus'
import { login} from '../request/api'
import { useRouter } from 'vue-router'
export default defineComponent({
    setup () {
        const data = reactive(new LoginData())
        const rules = {
            username: [
                {
                    required: true,
                    message: '请输入你的账号',
                    trigger: 'blur'
                },
                {
                    min: 3,
                    max: 10,
                    message: '账号的长度应在3~10之间',
                    trigger: 'blur'
                },
            ],
            password: [
                {
                    required: true,
                    message: '请输入你的密码',
                    trigger: 'blur'
                },
                {
                    min: 3,
                    max: 10,
                    message: '密码的长度应在3~10之间',
                    trigger: 'blur'
                },
            ]
        }
        const ruleFormRef = ref<FormInstance>()
        const router = useRouter()

        const submitForm = async (formEl: FormInstance | undefined) => {
            if (!formEl) return
            await formEl.validate((valid, fields) => {
                if (valid) {
                    login(data.ruleForm).then((res)=>{
                        console.log(res);
                        localStorage.setItem('token', res.data.token)
                        if(res.data.success)
                            router.push('/')
                        else
                            console.log('登入失败！');
                            
                    })
                console.log('提交成功!')
                } else {
                console.log('提交失败!', fields)
                }
            })
            
        }
        const resetForm = () => {
            data.ruleForm.username = ''
            data.ruleForm.password = ''
        }
        return {...toRefs(data), rules, submitForm, resetForm, ruleFormRef}
    }
})
</script>

<style lang="scss" scoped>
    .demo-ruleForm {
        margin: 50px auto;
        padding: 50px;
        width: 500px;
        text-align: center;
        color: white;
        border-radius: 20px;
        background-color: rgb(103, 187, 255);
    }
    .demo-ruleForm button {
        margin-top: 20px;
        width: 45%;
    }
</style>