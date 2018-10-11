<template>
  <el-table
    :data="tableData"
    @row-click="handleNodeClick"
    ref="refTable"
    style="width: 100%">
    <el-table-column type="expand" >
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand dataValue" :key="index"  v-for="(item, index) in props.row.children">
          <el-form-item label="" style="width:25%;padding-left:4%">
            <span>{{ item.name }}</span>
          </el-form-item>
          <el-form-item label="" style="width:25%;padding-left:5%">
            <span>{{'${'+ item.code +'}'}}</span>
          </el-form-item>
          <el-form-item label="" style="width:25%;padding-left:10%">
            <span>{{ item.value }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="变量名称"
      prop="name">
    </el-table-column>
    <el-table-column
      label="变量编码"
      prop="code">
    </el-table-column>
    <el-table-column
      label="变量值"
      prop="value">
    </el-table-column>
  </el-table>
</template>

<style>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>

<script>
  import qs from "qs"
  export default {
    data() {
      return {
        tableData: []
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
            this.tableData = data   
        })
    },
    handleNodeClick(rowData) {
        this.$request.post('/variable/show.do',qs.stringify({
            id: rowData.id
        }), {
            headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            }
        }).then(({data})=> {
            rowData.children = data;
            this.$refs.refTable.toggleRowExpansion(rowData)
        })
    
    }
    
    },
    created(){
    this.refresh();
    }
}
</script>