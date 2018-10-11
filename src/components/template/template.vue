<template>
    <el-dialog title="收货地址" :visible.sync="isOpen">
        <el-form :model="form">
            <el-form-item label="合同名称" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="合同类型" :label-width="formLabelWidth">
            <el-select v-model="form.type" placeholder="请选择合同类型">
                <el-option v-for = "item in typeList" :label="item.text" :value="item.id" :key="item.id">{{item.text}}</el-option>
            </el-select>
            </el-form-item>
            <el-form-item label="是否签章" :label-width="formLabelWidth">
            <el-select v-model="form.isSign" placeholder="请选择是否签章">
               <el-option v-for = "item in signStatusList" :label="item.text" :value="item.value" :key="item.value">{{item.text}}</el-option>
            </el-select>
            </el-form-item>
            <el-form-item label="签章关键词" :label-width="formLabelWidth">
            <el-input v-model="form.keyword" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="签名关键词" :label-width="formLabelWidth">
            <el-input v-model="form.signinfo" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="描述" :label-width="formLabelWidth">
            <el-input type="textarea" v-model="form.description" autocomplete="off"></el-input>
            </el-form-item>
            <el-upload
                class="upload-demo"
                action="">
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
             </el-upload>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="isOpen = false">取 消</el-button>
            <el-button type="primary" @click="isOpen = false">确 定</el-button>
        </div>
    </el-dialog>
</template>

<script>
export default {
    data() {
      return {
        form: {
          name: '',
          type: '',
          isSign: '',
          keyword: '',
          signinfo: '',
          description: ''
        },
        typeList:[],
        signStatusList:[
            {"text":"是","value":1},
            {"text":"否","value":0}
        ],
        formLabelWidth: '120px',
        isOpen: false
      };
    },
    methods: {
        open: function (row) {
            this.isOpen= true
            this.form = row
        },
        /* 刷新页面 */
        refresh() {
            this.$request.post('/template/treeTemplate.do',{}, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
            }).then(({data})=> {
                this.typeList = data[0].children
                console.log(data)
            })
        }
    },
      created(){
        this.refresh();
      }
    
    
  };
</script>
<style>

</style>
