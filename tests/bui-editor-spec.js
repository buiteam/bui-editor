var $ = require('jquery'),
  expect = require('expect.js'),
  sinon = require('sinon');
var Editor = require('../index');

require('bui-dpl/css/bs3/dpl.css');
require('bui-dpl/css/bs3/bui.css');
$('<div><span type="text" id="e1" class="edit-text">编辑</span><span type="text" id="e2" class="edit-text"></span><button id="outer">测试</button></div>').prependTo('body');
/*
describe('基本操作', function() {

  var editor = new Editor.Editor({
    trigger : '.edit-text',
    field : {
      rules : {
        required : true
      }
    }
  });

  editor.render();
  var el = editor.get('el'),
    field = editor.get('field');
  describe('测试编辑器生成',function(){

    it('测试生成编辑器',function(){
      expect(el.length).not.to.be(0);
      expect(editor.get('visible')).to.be(false);
    });

    it('测试编辑器字段域',function(){
      
      expect(field).not.to.be(null);
      expect($.isPlainObject(field)).to.be(false);
    });

    it('测试编辑器显示',function(done){
      var txtEl1 = $('#e1');
      txtEl1.trigger('click');
      setTimeout(function(){
        expect(editor.get('visible')).to.be(true);
        expect(field.get('value')).to.be(txtEl1.text());
        done();
      },100);
    });

    it('测试编辑器编辑其他DOM',function(done){
      var txtEl1 = $('#e2');
      txtEl1.trigger('click');
      setTimeout(function(){
        expect(editor.get('visible')).to.be(true);
        expect(field.get('value')).to.be(txtEl1.text());
        done();
      },100);
    });

  });

  describe('测试编辑器编辑文本',function(){

    it('修改字段域内容,调用Accept方法',function(done){
      var textEl = $('#e1'),
        value = '222';
      textEl.trigger('click');
      setTimeout(function(){
        field.set('value',value);
        editor.accept();
        expect(editor.getValue()).to.be(value);
        expect(textEl.text()).to.be(value);
        expect(editor.get('visible')).to.be(false);
        done();
      },100);
    });

    it('修改字段域内容,验证失败，调用accept',function(done){
      var textEl = $('#e1'),
        value = '';
      textEl.trigger('click');
      setTimeout(function(){
        field.set('value',value);
        editor.accept();
        expect(editor.get('visible')).to.be(true);
        expect(textEl.text()).not.to.be(value);
        done();
      },100);
    });
    it('测试编辑器取消编辑',function(){
      var textEl = $('#e1');
      editor.cancel();
      expect(editor.get('visible')).to.be(false);
      expect(textEl.text()).not.to.be('');
    });
    it('修改字段域内容,验证失败，点击外部',function(done){
      
      var textEl = $('#e1'),
        value = '';
      textEl.trigger('click');
      setTimeout(function(){
        field.set('value',value);
        $('#outer').trigger('mousedown');
        setTimeout(function(){
          expect(editor.get('visible')).to.be(true);
          expect(textEl.text()).not.to.be(value);
          done();
        },100);
      });
    });

    it('修改字段域内容,验证成功，点击外部',function(done){
      editor.cancel();
      var textEl = $('#e1'),
        value = '200';
      textEl.trigger('click');
      setTimeout(function(){
        field.set('value',value);
        $('#outer').trigger('mousedown');
        setTimeout(function(){
          expect(editor.get('visible')).to.be(false);
          expect(textEl.text()).to.be(value);
          done();
        },100);
      },100);
    });
  });

  describe('测试事件',function(){

    it('测试触发accept事件',function(done){
      var callback = sinon.spy();
      editor.on('accept',callback);
      var textEl = $('#e1'),
        value = '200';
      textEl.trigger('click');
      setTimeout(function(){
        $('#outer').trigger('mousedown');
        setTimeout(function(){
          expect(callback.called).to.be(true);
          done();
        },100);
      },100);
    });

    it('测试触发cancel事件',function(done){
      var callback = sinon.spy();
      editor.on('cancel',callback);
      var textEl = $('#e1'),
        value = '200';
      textEl.trigger('click');
      setTimeout(function(){
        editor.cancel();
        expect(callback.called).to.be(true);
        done();
      },100);
    });
  });
  
});



describe('操作', function() {


  $('<div><div type="text" class="edit-sel"></div><div type="text" id="s1" class="edit-sel"></div><button>侧方</button></div>').prependTo('body');

  function getValue(obj,text){
    var rst = text;
    BUI.each(obj,function(v,k){
      if(v == text){
        rst = k;
        return false;
      }
    });
    return rst;
  }
  var items = {'1' : '通过','2':'不通过'},
    editor = new Editor.Editor({
    trigger : '.edit-sel',
    field : {
      xtype : 'select',
      items : items
    },
    parser : function(text){
      return getValue(items,text);
    },
    formatter : function(text){
      return items[text];
    }
  });

  editor.render();
  var select;

  describe('测试编辑器生成',function(){
    it('测试select选项',function(done){
      setTimeout(function(){
        select = editor.get('field').get('select');
        var list = select.get('list');
        expect(list).not.to.be(undefined);

        expect(list.getItemCount()).to.be(2);
        done();
      },100);
      
    });

  });

  describe('操作',function(){
    var s1El = $('#s1');
    it('编辑文本,测试展示值',function(done){
      s1El.trigger('click');
      setTimeout(function(){
        expect(editor.get('visible')).to.be(true);
        expect(select.getSelectedText()).to.be(s1El.text());
        done();

      });
    });
    it('更改选项',function(){
      var preText = s1El.text();
      select.setSelectedValue('2');
      editor.accept();
      expect(editor.get('visible')).not.to.be(true);
      expect(s1El.text()).to.be(select.getSelectedText());
      expect(preText).not.to.be(s1El.text());
    });
  });


});

*/

describe('record editor',function(){
  $('<div><div type="text" id="log" class="edit-sel"></div><button id="btnRecord">触发</button></div>').prependTo('body');


  var RecordEditor = Editor.RecordEditor;

  var record = {a:'21e',b:'222',c:'ddd'},
    editor = new RecordEditor({
    trigger : '#btnRecord',
    form : {
      children : [
        {name : 'a'},
        {name : 'b',rules :{required:true}},
        {name : 'c',rules :{required:true}}
      ],
      buttonBar : {
        elCls : 'centered toolbar'
      }
    },
    record : record
  });

  editor.render();
  var el = editor.get('el'),
    form = editor.get('form');
  changeData();
  function changeData(){
    var r = editor.get('record');
    $('#log').text(BUI.JSON.stringify(r));
  }
  editor.on('accept',function(ev){
    changeData();
  });

  describe('测试编辑器生成',function(){
    it('测试编辑器生成',function(){
      expect(el.length).not.to.be(0);
    });
    it('测试表单生成',function(){
      
      expect($.isPlainObject(form)).to.be(false);
      expect(form.get('el').length).not.to.be(0);
    });
    it('测试表单初始化',function(){
      var frecord = form.get('record');
      expect(frecord.a).to.be(record.a);
      expect(frecord.b).to.be(record.b);
      expect(frecord.c).to.be(record.c);
    });
    it('显示编辑器',function(done){
      expect(editor.get('visible')).to.be(false);
      $('#btnRecord').trigger('click');
      setTimeout(function(){
        expect(editor.get('visible')).to.be(true);
        done();
      },100);
    });
  });

  describe('测试编辑器操作',function(){

    it('修改数据未通过验证，提交',function(){
      var field = form.getField('b');
      field.set('value','');
      editor.accept();
      expect(editor.isValid()).to.be(false);
      expect(editor.get('visible')).to.be(true);
    });

    it('取消操作',function(){
      var field = form.getField('b');
      editor.cancel();
      expect(record.b).not.to.be(field.get('value'));
      expect(editor.get('visible')).to.be(false);
    });

    it('修改数据通过验证,提交',function(done){
      $('#btnRecord').trigger('click');
      setTimeout(function(){
        expect(editor.get('visible')).to.be(true);
        var value = 'ssee',
          field = form.getField('b');
        field.set('value',value);
        editor.accept();
        expect(editor.get('visible')).to.be(false);
        expect(record.b).to.be(value);
        done();
      },300);
    });
  });
});
