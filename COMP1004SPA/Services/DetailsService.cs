using COMP1004SPA.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.IO;

namespace COMP1004SPA.Services{
    public class DetailsService{
        public static Details detail  = readFile();
    
    public static Details readFile(string path = "./Details.txt"){
        
        string[] details = File.ReadAllLines(path);
        Details d = new Details(){numOfTables = int.Parse(details[0]),openTime = details[1], closeTime = details[2] };
        
        return d;
    }
    public static Details GetDetails(){
        
        return detail;
    }
    public static Details update(Details newDetails){
        detail.numOfTables = newDetails.numOfTables;
        detail.openTime = newDetails.openTime;
        detail.closeTime = newDetails.closeTime;
        File.WriteAllText("./Details.txt",newDetails.numOfTables + "\n" + newDetails.openTime + "\n" + newDetails.closeTime);
        return detail;
    }
}
}