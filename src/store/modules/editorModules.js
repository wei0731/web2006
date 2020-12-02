export default{
    namespaced:true,
    state:{
        editorContent:""
    },
    mutations:{
        sedEditorContent(state,content){
            state.editorContent=content;
        }
    }
}