<template>
     <div>
           <el-tree
            :data="treeData"
            :props="defaultProps"
            accordion
            lazy
            :expand-on-click-node="true"
            @node-click="handleNodeClick">
                <span class="custom-tree-node" slot-scope="{ node, data }">
                    <span>{{ data.label }} </span>
                    <span v-if="data.leaf">${<span>{{ data.code }}</span>}</span>
                    <span>{{ data.value }}</span>
                </span>
            </el-tree>    
      </div>
</template>


<script>
import qs from "qs"
export default {
      data() {
          return {
                treeData: [],
                defaultProps: {
                    children: 'children',
                    label: 'label',
                    isLeaf:'leaf',
                    code:'code',
                    value:'value'
                }
          }  
      },
      methods: {
        
        /* 刷新页面 */
        refresh() {
            this.$request.post('/variable/show.do',{}, {
                headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                }
            }).then(({data})=> {
                    data.forEach((item, i) => {
                        let obj = {};
                        obj.id = item.id;
                        obj.label = item.name;
                        obj.children = [];
                        this.treeData.push(obj);
                    })
                    
            })
        },
      handleNodeClick(rowData) {
        if(rowData && rowData.children && rowData.children.length>0){
            rowData.children = [];
        }else{
            this.$request.post('/variable/show.do',qs.stringify({
                id: rowData.id
            }), {
                headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                }
            }).then(({data})=> {
                    rowData.children = [];
                    data.forEach((item, i) => {
                        let obj = {};
                        obj.id = item.id;
                        obj.label = item.name;
                        obj.code = item.code;
                        obj.value = item.value;
                        obj.children = [];
                        obj.leaf = true;
                        rowData.children.push(obj);
                    })     
            })
        }
        
      }
        
      },
      created(){
        this.refresh();
      }
}
</script>