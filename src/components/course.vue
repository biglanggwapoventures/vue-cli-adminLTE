<template>
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <section class="content-header">
            <h1>
                添加,修改,删除课程
                </h1>
        </section>
        <!-- Main content -->
        <section class="content">
            <div class="row">
                <div class="col-xs-12">
                    <div class="box">
                        <div class="box-header">
                            <h3 class="box-title">课程列表</h3>
                            <button style="float: right" class="btn btn-primary" data-toggle="modal" data-target="#modal-default1">添加</button>
                        </div>
                        <!-- /.box-header -->
                        <div class="box-body">
                            <table id="example2" class="table table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th>标题</th>
                                        <th>创建时间</th>
                                        <th>学时</th>
                                        <th>学分</th>
                                        <th>授课老师</th>
                                        <th>修改时间</th>
                                        <th>查看课件</th>
                                        <th>操作</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>语文</td>
                                        <td>2017/8/8
                                        </td>
                                        <td>5</td>
                                        <td>10</td>
                                        <td>羊羊羊</td>
                                        <td>017/8/8</td>
                                        <td>
                                            <a href="./courseWares.html">
                                                <button data-toggle="modal" data-target="#modal-default2" class="btn btn-primary btn-xs">查看课件</button>
                                            </a>
                                        </td>
                                        <td>
                                            <div>
                                                <button type="button" class="btn btn-primary btn-xs" data-toggle="modal" data-target="#modal-default">修改</button>
                                                <button class="btn btn-primary btn-xs">删除</button>
                                                <button class="btn btn-primary btn-xs">展示</button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>数学</td>
                                        <td>2017/8/8
                                        </td>
                                        <td>5</td>
                                        <td>10</td>
                                        <td>羊羊羊</td>
                                        <td>017/8/8</td>
                                        <td>
                                            <a href="./courseWares.html">
                                                <button data-toggle="modal" data-target="#modal-default2" class="btn btn-primary btn-xs">查看课件</button>
                                            </a>
                                        </td>
                                        <td>
                                            <div>
                                                <button data-toggle="modal" data-target="#modal-default" class="btn btn-primary btn-xs">修改</button>
                                                <button class="btn btn-primary btn-xs">删除</button>
                                                <button class="btn btn-primary btn-xs">展示</button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>英文</td>
                                        <td>2017/8/8
                                        </td>
                                        <td>5</td>
                                        <td>10</td>
                                        <td>羊羊羊</td>
                                        <td>017/8/8</td>
                                        <td>
                                            <a href="./courseWares.html">
                                                <button data-toggle="modal" data-target="#modal-default2" class="btn btn-primary btn-xs">查看课件</button>
                                            </a>
                                        </td>
                                        <td>
                                            <div>
                                                <button data-toggle="modal" data-target="#modal-default" class="btn btn-primary btn-xs">修改</button>
                                                <button class="btn btn-primary btn-xs">删除</button>
                                                <button class="btn btn-primary btn-xs">展示</button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <!-- /.box-body -->
                    </div>
                    <!-- /.box -->
                </div>
                <!-- /.col -->
            </div>
            <div class="modal fade" id="modal-default">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span></button>
                            <h4 class="modal-title">修改课程</h4>
                        </div>
                        <div class="modal-body">
                            <div class="box box-primary">
                                <form role="form">
                                    <div class="box-body">
                                        <div class="form-group">
                                            <label for="exampleInputFile">上传课程图标</label>
                                            <input style="display: inline-block;" type="file" id="exampleInputFile">
                                            <img style="width: 50px;height: 50px;display: inline-block;vertical-align: middles" src="../dist/img/photo4.jpg" alt="">
                                        </div>
                                        <div class="form-group">
                                            <label for="className1">课程名</label>
                                            <input class="form-control" id="className1" placeholder="请输入课程名">
                                        </div>
                                        <div class="form-group">
                                            <label for="classOption1">课程类别</label>
                                            <input class="form-control" id="classOption1" placeholder="请输入课程类别">
                                        </div>
                                        <div class="form-group">
                                            <label>课程简介</label>
                                            <textarea class="form-control" rows="3" placeholder="请输入课程简介"></textarea>
                                        </div>
                                        <div class="form-group">
                                            <label for="classTeacher1">授课老师</label>
                                            <input class="form-control" id="classTeacher1" placeholder="请输入授课老师">
                                        </div>
                                        <div class="form-group">
                                            <label for="classPlace1">上课地点</label>
                                            <input class="form-control" id="classPlace1" placeholder="请输入上课地点">
                                        </div>
                                        <div class="form-group">
                                            <label>上课时间</label>
                                            <div class="input-group date">
                                                <div class="input-group-addon">
                                                    <i class="fa fa-calendar"></i>
                                                </div>
                                                <input placeholder="请选择创建时间" type="text" class="form-control pull-right" id="datepicker">
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default pull-left" data-dismiss="modal">关闭</button>
                            <button type="button" class="btn btn-primary" data-dismiss="modal">保存</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="modal-default1">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span></button>
                            <h4 class="modal-title">修改课程</h4>
                        </div>
                        <div class="modal-body">
                            <div class="box box-primary">
                                <form role="form">
                                    <div class="box-body">
                                        <div class="form-group">
                                            <label for="exampleInputFile">上传课程图标</label>
                                            <input style="display: inline-block;" type="file" id="exampleInputFile">
                                            <img style="width: 50px;height: 50px;display: inline-block;vertical-align: middles" src="../dist/img/photo4.jpg" alt="">
                                        </div>
                                        <div class="form-group">
                                            <label for="className2">课程名</label>
                                            <input class="form-control" id="className2" placeholder="请输入课程名">
                                        </div>
                                        <div class="form-group">
                                            <label for="classOption2">课程类别</label>
                                            <input class="form-control" id="classOption2" placeholder="请输入课程类别">
                                        </div>
                                        <div class="form-group">
                                            <label>课程简介</label>
                                            <textarea class="form-control" rows="3" placeholder="请输入课程简介"></textarea>
                                        </div>
                                        <div class="form-group">
                                            <label for="classTeacher2">授课老师</label>
                                            <input class="form-control" id="classTeacher2" placeholder="请输入授课老师">
                                        </div>
                                        <div class="form-group">
                                            <label for="classPlace2">上课地点</label>
                                            <input class="form-control" id="classPlace2" placeholder="请输入上课地点">
                                        </div>
                                        <div class="form-group">
                                            <label>上课时间</label>
                                            <div class="input-group date">
                                                <div class="input-group-addon">
                                                    <i class="fa fa-calendar"></i>
                                                </div>
                                                <input placeholder="请选择创建时间" type="text" class="form-control pull-right" id="datepicker">
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default pull-left" data-dismiss="modal">关闭</button>
                            <button type="button" class="btn btn-primary" data-dismiss="modal">保存</button>
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
    data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        mounted() {
            $("body").resize();
            $('#example2').dataTable({
                "ordering": false,
                "oLanguage": {
                    "sLengthMenu": "每页显示 _MENU_ 条记录",
                    "sZeroRecords": "对不起，查询不到任何相关数据",
                    "sInfo": "当前显示 _START_ 到 _END_ 条，共 _TOTAL_条记录",
                    "sInfoEmtpy": "找不到相关数据",
                    "sInfoFiltered": "数据表中共为 _MAX_ 条记录)",
                    "sProcessing": "正在加载中...",
                    "sSearch": "搜索",
                    "oPaginate": {
                        "sFirst": "第一页",
                        "sPrevious": " 上一页 ",
                        "sNext": " 下一页 ",
                        "sLast": " 最后一页 "
                    },
                }
            });

        },
        methods: {

        }
}
</script>

</html>
