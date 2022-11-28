function WriteToFile(passForm) {

    var fso = new ActiveXObject("Scripting.FileSystemObject");
    var a = fso.CreateFile("c:\\testfile.txt", true);
    a.WriteLine("This is a test.");
    a.Close();
 }
