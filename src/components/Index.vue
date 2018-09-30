<template>
<el-container style="height: 500px; border: 1px solid #eee">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1']" router>
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>合同管理</template>
        <el-menu-item-group>
          <el-menu-item index="home">合同变量管理</el-menu-item>
          <el-menu-item index="template">合同模板管理</el-menu-item>
          <el-menu-item index="1-3">规则设置</el-menu-item>
          <el-menu-item index="1-4">规则检查</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>合同查询</template>
        <el-menu-item-group>
          <el-menu-item index="2-1">合同调用记录查询</el-menu-item>
        </el-menu-item-group> 
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-setting"></i>用户管理</template>
        <el-menu-item-group>
          <el-menu-item index="3-1">用户管理</el-menu-item>
          <el-menu-item index="3-2">变量管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>
  <el-container>   
    <el-main>
    </el-main>
  </el-container>
</el-container>
</template>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>

<script>
  export default {
   
  };
</script>