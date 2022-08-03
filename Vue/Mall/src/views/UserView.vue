<template>
    <div>
        <div class="select-box">
            <el-form :inline="true" :model="selectData" class="demo-form-inline">
                <el-form-item label="姓名">
                    <el-input v-model="selectData.nickName" placeholder="请输入姓名" />
                </el-form-item>
                <el-form-item label="角色">
                    <el-select v-model="selectData.role" placeholder="请选择">
                        <el-option
                        label="全部"
                        :value="0">
                    </el-option>
                    <el-option
                        v-for="item in roleList"
                        :key="item.roleId"
                        :label="item.roleName"
                        :value="item.roleId">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
                </el-form-item>
            </el-form>
        </div>
        <el-table :data="list" border style="width: 100%">
            <el-table-column prop="id" label="ID" width="180" />
            <el-table-column prop="nickName" label="姓名" width="180" />
            <el-table-column prop="role" label="角色">
                <template #default="scope">
                    <el-button
                    link
                    v-for="item in scope.row.role"
                    :key="item.role"
                    @click="deleteRow(scope)"
                    size="small">
                    {{item.roleName}}
                    </el-button>
                </template>
            </el-table-column>
            <el-table-column prop="role" label="操作">
                <template #default="scope">
                    <el-button
                    link
                    @click="changeUser(scope.row)"
                    type="primary"
                    size="small">
                    编辑
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>

    <el-dialog v-model="isShow" title="编辑信息">
    <el-form :model="active">
        <el-form-item label="姓名" label-width="50px">
        <el-input v-model="active.nickName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="角色" label-width="50px">
        <el-select multiple v-model="active.role" placeholder="清选择角色">
            <el-option
                v-for="item in roleList"
                :key="item.roleId"
                :label="item.roleName"
                :value="item.roleId">
            </el-option>
        </el-select>
        </el-form-item>
    </el-form>
    <div class="dialog-footer">
            <el-button type="primary" @click="updataUser">更 改</el-button>
        <el-button @click="exit">取 消</el-button>
    </div>
    </el-dialog>
</template>

<script lang="ts">
import { getUserList, getRoleList } from '../request/api'
import { InitData, ListInt } from "../type/user";
import { defineComponent, onMounted, reactive, toRefs, watch } from 'vue'
import { valueEquals } from 'element-plus';

export default defineComponent({
    setup () {
        const data = reactive(new InitData)
        onMounted(()=> {
            getUser()
            getRole()
        })
        const getUser = () => {
            getUserList().then((res) => {
                console.log(res);
                data.list = res.data
            })
        }
        const getRole = () => {
            getRoleList().then((res) => {
                console.log(res);
                data.roleList = res.data
            })
        }
        const deleteRow = (row:any) => {
            console.log(row);
            
        }
        const onSubmit = () => {
            let arr:ListInt[]=[]
            if(data.selectData.role || data.selectData.nickName) {
                if(data.selectData.nickName) {
                    arr = data.list.filter((value) => {
                        return value.nickName.indexOf(data.selectData.nickName) !== -1
                    })
                }
                if(data.selectData.role) {
                    arr = (data.selectData.nickName ? arr : data.list).filter((value) => {
                        return value.role.find((item)=>item.role===data.selectData.role)
                    })
                }
            }
            else {
                arr = data.list
            }
            data.list = arr
        }
        watch([() => data.selectData.role, () => data.selectData.nickName], () => {
            if(data.selectData.nickName == '' && data.selectData.role == 0)
                getUser()
        })
        const changeUser=(row:ListInt)=> {
            data.isShow=true
            data.active = {
                id: row.id,
                nickName: row.nickName,
                userName: row.userName,
                role: row.role.map((value:any)=>value.role || value.roleId)
            }
        }
        const updataUser=()=> {
            let obj:any =data.list.find((value)=>value.id == data.active.id)
            obj.nickName = data.active.nickName
            obj.role = data.roleList.filter(value=>data.active.role.indexOf(value.roleId) !== -1)
            data.list.forEach((item, i)=> {
                if(item.id == obj.id) {
                    data.list[i] =obj
                }
            })
            data.isShow = false
        }
        const exit=()=> {
            data.isShow = false
            
        }
        return {...toRefs(data), deleteRow, onSubmit, changeUser, updataUser, exit}
    }
})
</script>

<style scoped>

</style>