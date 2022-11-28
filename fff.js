var fso = WScript.CreateObject("Scripting.FileSystemObject");
var f = fso.GetFile("C:\\test.txt", True);
var txt = f.OpenAsTextStream(1,-2);
txt.Close();

s=s.replace(/\r\n/g,'1');
WScript.Echo(s);
