const textarea = document.getElementById('textinput' )
const preview = document.getElementById('preview' )
let transformed;

function transformation(text){
    transformed = text
        //ul
 .replace(/^\s*\n\*/gm, '<ul>\n*')
 .replace(/^(\*.+)\s*\n([^\*])/gm, '$1\n</ul>\n\n$2')
 .replace(/^\*(.+)/gm, '<li>$1</li>')

//ol
 .replace(/^\s*\n\d\./gm, '<ol>\n1.')
 .replace(/^(\d\..+)\s*\n([^\d\.])/gm, '$1\n</ol>\n\n$2')
 .replace(/^\d\.(.+)/gm, '<li>$1</li>')

//blockquote
 .replace(/^\>(.+)/gm, '<blockquote>$1</blockquote>' )

//h
 .replace(/[\#]{6}(.+)/g, '<h6>$1</h6>' )
 .replace(/[\#]{5}(.+)/g, '<h5>$1</h5>' )
 .replace(/[\#]{4}(.+)/g, '<h4>$1</h4>' )
 .replace(/[\#]{3}(.+)/g, '<h3>$1</h3>' )
 .replace(/[\#]{2}(.+)/g, '<h2>$1</h2>' )
 .replace(/[\#]{1}(.+)/g, '<h1>$1</h1>' )

//alt h
 .replace(/^(.+)\n\=+/gm, '<h1>$1</h1>' )
 .replace(/^(.+)\n\-+/gm, '<h2>$1</h2>' )

//images
 .replace(/\!\[([^\]]+)\]\(([^\)]+)\)/g, '<img src="$2" alt="$1" />' )

//links
 .replace(/[\[]{1}([^\]]+)[\]]{1}[\(]{1}([^\)\"]+)(\"(.+)\")?[\)]{1}/g, '<a href="$2" title="$4">$1</a>' )

//font styles
 .replace(/[\*\_]{2}([^\*\_]+)[\*\_]{2}/g, '<b>$1</b>' )
 .replace(/[\*\_]{1}([^\*\_]+)[\*\_]{1}/g, '<i>$1</i>' )
 .replace(/[\~]{2}([^\~]+)[\~]{2}/g, '<del>$1</del>' )

//pre
 .replace(/^\s*\n\`\`\`(([^\s]+))?/gm, '<pre class="$2">' )
 .replace(/^\`\`\`\s*\n/gm, '</pre>\n\n' )

//code
 .replace(/[\`]{1}([^\`]+)[\`]{1}/g, '<code>$1</code>' )

 //table
 .replace(/^ {0,3}\|?.+\|.+\n {0,3}\|?[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:[-=]){2,}[\s\S]+?(?:\n\n|¨0)/gm,)

return transformed.trim()

}

textarea.addEventListener('keyup', () => {
    console.log(textarea.value)
    let transform = textarea.value
    // console.log(transformation(transform))
    preview.innerHTML = transformation(transform )
    console.log(preview.innerHTML)
})



                



  
        
 
        
