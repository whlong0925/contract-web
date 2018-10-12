<template>
<el-container>
  <el-aside width="200px">
      <el-tree :data="templateTypeList" :props="defaultProps"
        @node-click="handleNodeClick">
      </el-tree>
  </el-aside>
<el-container >
  <el-header style="background-color: #fff">
      <el-button type="primary" @click="modify({},false)" >新建</el-button>
  </el-header>
  <el-main>
               <el-table :data="tableData" border >
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
                            <el-button type="text" @click="modify(scope.row,true)">修改</el-button>
                            <el-button type="text" @click="del(scope.row.id)">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <TemplateForm ref="templateForm"></TemplateForm>
  </el-main>
</el-container>
</el-container>
</template>


<script>
import qs from "qs"
import TemplateForm from "./Template.vue"
export default {
      data() {
          return {            
             tableData: [],
             templateTypeList: [] ,
             defaultProps: {
                children: 'children',
                label: 'text'
            }
                     
          }  
      },
      components: {
            TemplateForm
      },
      methods: {
        
        /* 刷新页面 */
        refresh() {
            //获取模板列表
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
            });
            //获取模板类型
            this.$request.post('/template/treeTemplate.do',{}, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
            }).then(({data})=> {
                this.templateTypeList = data
            })
        },
        modify(row,isEdit){
           this.$refs.templateForm.edit(row,isEdit)
        },
        handleNodeClick(rowData) {

        }
        
        
      },
      created(){
        this.refresh();
      }
}
</script>