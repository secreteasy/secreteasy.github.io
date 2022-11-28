var fso = WScript.CreateObject("Scripting.FileSystemObject");
var f = fso.GetFile("C:\\test.txt", True);
var txt = f.OpenAsTextStream(1,-2);
txt.Close();


WScript.Echo(s);
