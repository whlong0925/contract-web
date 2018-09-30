<template>
     <div>
               <el-table
                    :data="tableData"
                    border                    
                >
                    <el-table-column
                        type="index"
                        label="序号"
                        width="65">
                    </el-table-column>
                     <el-table-column
                        label="合同类型"
                        prop="typeName"
                        show-overflow-tooltip
                    ></el-table-column>
                    <el-table-column
                        label="合同名称"
                        prop="name"
                        width="160"
                        show-overflow-tooltip
                    ></el-table-column>
                    <el-table-column
                        label="版本"
                        prop="versionNumber"
                        sortable
                        width="90"
                    ></el-table-column>
                      <el-table-column
                        label="是否启用"
                        sortable
                        prop="statusName"
                        width="90"
                    ></el-table-column>
                    <el-table-column
                        label="上次修改时间"
                        prop="updateTime"
                        sortable
                        width="170"
                    ></el-table-column>
                    <el-table-column
                        label="修改人"
                        prop="userName"
                        sortable
                        width="170"
                    ></el-table-column>
                    
                    <el-table-column
                        label="操作"
                        width="250"
                    >
                        <template scope="scope">
                            <el-button type="text" @click="modify(scope.row)">修改</el-button>
                            <el-button type="text" @click="del(scope.row.id)">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
      </div>
</template>


<script>
import qs from "qs"
export default {
      data() {
          return {
              //弹出框选择
             pickerOptions: {
            
             },
             tableData: []
              
          }  
      },
      methods: {
        
        /* 刷新页面 */
        refresh() {
            this.$request.post('/template/list.do',qs.stringify({
                groupId: 7,
                type: 0,
                name: ""
            }), {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            }
          }).then(({data})=> {
                this.tableData = data
            })
        },

        
        
      },
      created(){
        this.refresh();
      }
}
</script>