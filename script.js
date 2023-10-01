 tinymce.init({
    selector: 'textarea#default',
    width:1070,
    height:300,
    class:'question',
    
    plugins:[
        'advlist', 'autolink', 'link', 'image', 'lists', 'charmap', 'preview', 'anchor', 'pagebreak',
        'searchreplace', 'wordcount', 'visualblocks', 'fullscreen', 'insertdatetime', 'media',
        'table', 'emoticons', 'templet', 'codesample'
    ],
    toolbar: 'undo redo | styles |bold italic underline | alignleft aligncenter alignright alignjustify |'+
    'bullist numlist outdent indent | link image | print preview media fullscreen|'+
    'forecolor backcolor emoticons',
    menu:{
        favs: {title:'menu', items:'code visualaid | searchreplace | emoticons'}
    },
    menubar:'favs file edit view insert format tools table',
    content_style: 'body {font-family:sans-serif;font-size:16px}'

 });