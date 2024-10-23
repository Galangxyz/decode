

var quot="'"
var fullenc=false

function Encrypt() {
  if (fullenc) {EncryptAll()} else {EncryptBasic()}
}

function EncryptBasic(){
 var NewCode=escape(document.getElementById('InputArea').value)
 NewCode='<'+'script language=javascript>document.write(unescape('+quot
  + NewCode+quot+ '))<'+'/script>\n'
 document.getElementById('OutputArea').value = NewCode
 FileSizes()
}

function EncryptAll() {NewCode=""
 var OldCode=document.getElementById('InputArea').value
 for (var i=0; i<OldCode.length; i++){NewCode=NewCode+Hex(OldCode.charCodeAt(i))}
 NewCode='<'+'script language=javascript>document.write(unescape('+quot
  + NewCode+quot+ '))<'+'/script>\n'     
 document.getElementById('OutputArea').value = NewCode
 FileSizes()
 //--adds linebreak after encoded block.
 // the added linebreaks prevent preview in interim decoding, 
 //  but will view in final decoding 
}

function Decrypt() {
 var NewCode=unescape(document.getElementById('InputArea').value)
 NewCode=NewCode.replace("<script language=javascript>document.write(unescape('","")
 //NewCode=NewCode.replace("\n'))<"+"/script>","")
 NewCode=NewCode.replace("'))<"+"/script>","")
 document.getElementById('OutputArea').value = NewCode
 FileSizes()
}

function Hex(dec){
 var hexbase="0123456789ABCDEF"
 hx_hi=dec/16; hx_lo=dec%16;
        hx=hexbase.substr(hx_hi,1)+hexbase.substr(hx_lo,1)
 hexval='%'+hx
 return hexval;
}

function FileSizes() {
 document.getElementById('topSize').innerHTML= 
 document.getElementById('InputArea').value.length
 document.getElementById('bottomSize').innerHTML= 
 document.getElementById('OutputArea').value.length

}

function Preview(selection) {
 FileSizes()
 var newpage=""
 if (selection==0) {newpage=document.getElementById('InputArea').value
     var w0 = window.open("","popup0","width=600,height=350,directories=no,menubar=yes,status=yes,toolbar=yes,resizable=yes,scrollbars=yes,screenY=0,top=0,screenX=80,left=80" );
       w0.document.writeln("<html><title>Top Window Preview</title><body>" );
     w0.document.writeln(newpage);
     w0.document.writeln("<hr><form><center><input type=\"submit\" value=\"Close Window\" onClick=\"window.close();return false; \"></center></form>" );
     w0.document.writeln("</body></html>" );
     w0.document.close() ;
     w0.document.focus(true)
 }
 else {selection=1; newpage=document.getElementById('OutputArea').value
     var w1 = window.open("","popup1","width=600,height=350,directories=no,menubar=yes,status=yes,toolbar=yes,resizable=yes,scrollbars=yes,screenY=0,top=0,screenX=80,left=80" );
     w1.document.writeln("<html><title>Bottom Window Preview</title><body>" );
     w1.document.writeln(newpage);
     w1.document.writeln("<hr><form><center><input type=\"submit\" value=\"Close Window\" onClick=\"window.close();return false; \"></center></form>" );
     w1.document.writeln("</body></html>" );
     w1.document.close() ;
     w1.document.focus(true)
 }

function copyText() {
    var outputArea = document.getElementById('OutputArea');
    outputArea.select();
    document.execCommand('copy'); // Menyalin teks yang dipilih ke clipboard
    alert('Teks telah disalin!'); // Memberikan notifikasi bahwa teks telah disalin
}


}