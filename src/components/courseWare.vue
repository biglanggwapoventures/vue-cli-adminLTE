<template>
    <div class="content-wrapper ">
        <!-- Content Header (Page header) -->
        <section class="content-header ">
            <h1>
                添加,删除课件
                </h1>
        </section>
        <!-- Main content -->
        <section class="content ">
            <div class="box">
                <div class="box-header">
                    <h3 class="box-title">课件列表</h3>
                    <button style="float: right" class="btn btn-primary" data-toggle="modal" data-target="#modal-default1">添加</button>
                </div>
                <div class="row">
                    <div class="col-md-3">
                        <!-- Box Comment -->
                        <div class="box box-widget">
                            <div class="box-header with-border">
                                <div class="user-block">
                                    <span style="margin-left: 0;" class="username"><a href="#">桌椅的故事</a></span>
                                </div>
                                <!-- /.user-block -->
                                <div class="box-tools ">
                                    <button type="button" class="btn btn-box-tool"><i class="fa fa-times"></i></button>
                                </div>
                                <!-- /.box-tools -->
                            </div>
                            <!-- /.box-header -->
                            <div class="box-body">
                                <img class="img-responsive pad" src="../dist/img/photo2.png" alt="Photo">
                            </div>
                            <!-- /.box-footer -->
                        </div>
                        <!-- /.box -->
                    </div>
                    <div class="col-md-3">
                        <!-- Box Comment -->
                        <div class="box box-widget">
                            <div class="box-header with-border">
                                <div class="user-block ">
                                    <span style="margin-left: 0;" class="username"><a href="#">桌椅的故事</a></span>
                                </div>
                                <!-- /.user-block -->
                                <div class="box-tools">
                                    <button type="button" class="btn btn-box-tool"><i class="fa fa-times"></i></button>
                                </div>
                                <!-- /.box-tools -->
                            </div>
                            <!-- /.box-header -->
                            <div class="box-body">
                                <img class="img-responsive pad" src="../dist/img/photo2.png" alt="Photo">
                            </div>
                            <!-- /.box-footer -->
                        </div>
                        <!-- /.box -->
                    </div>
                    <div class="col-md-3">
                        <!-- Box Comment -->
                        <div class="box box-widget">
                            <div class="box-header with-border">
                                <div class="user-block">
                                    <span style="margin-left: 0;" class="username"><a href="#">桌椅的故事</a></span>
                                </div>
                                <!-- /.user-block -->
                                <div class="box-tools">
                                    <button type="button" class="btn btn-box-tool"><i class="fa fa-times"></i></button>
                                </div>
                                <!-- /.box-tools -->
                            </div>
                            <!-- /.box-header -->
                            <div class="box-body">
                                <img class="img-responsive pad" src="../dist/img/photo2.png" alt="Photo">
                            </div>
                            <!-- /.box-footer -->
                        </div>
                        <!-- /.box -->
                    </div>
                    <div class="col-md-3">
                        <!-- Box Comment -->
                        <div class="box box-widget">
                            <div class="box-header with-border">
                                <div class="user-block">
                                    <span style="margin-left: 0;" class="username"><a href="#">桌椅的故事</a></span>
                                </div>
                                <!-- /.user-block -->
                                <div class="box-tools">
                                    <button type="button" class="btn btn-box-tool"><i class="fa fa-times"></i></button>
                                </div>
                                <!-- /.box-tools -->
                            </div>
                            <!-- /.box-header -->
                            <div class="box-body">
                                <img class="img-responsive pad" src="../dist/img/photo2.png" alt="Photo">
                            </div>
                            <!-- /.box-footer -->
                        </div>
                        <!-- /.box -->
                    </div>
                    <!-- /.col -->
                </div>
                <div class="modal fade" id="modal-default1">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span></button>
                                <h4 class="modal-title">修改课程</h4>
                            </div>
                            <div class="modal-body ">
                                <div class="box box-primary">
                                    <form role="form">
                                        <div class="box-body">
                                            <div class="form-group">
                                                <label for="exampleInputFile">上传课件资源</label>
                                                <input style="display: inline-block;" type="file" id="exampleInputFile">
                                            </div>
                                            <div class="form-group">
                                                <label for="exampleInputFile">上传图标文件</label>
                                                <input type="file" id="exampleInputFile">
                                                <p class="help-block">请上传XXMB以下的图标文件</p>
                                                <img style="width: 300px;height: 200px;" src="../dist/img/photo3.jpg" alt="">
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="modal-footer ">
                                <button type="button" class="btn btn-default pull-left" data-dismiss="modal">关闭</button>
                                <button type="button" class="btn btn-primary" data-dismiss="modal">保存</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- /.content -->
    </div>
</template>
<script>
export default {
    mounted(){
        $("body").resize()
    }
}
</script>
<style scoped>
.box-header h3 {
    font-size: 14px;
}

.row {
    margin-bottom: 10px;
}
</style>
