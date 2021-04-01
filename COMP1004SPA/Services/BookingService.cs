using COMP1004SPA.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.IO;
using COMP1004SPA.Services;
namespace COMP1004SPA.Services{
    public class BookingService {
        public static List<Booking> book = readFile();
        public static int Bnum = GetMax() + 1;
        public static List<Booking> readFile(string path ="./Bookings.txt"){
            List<Booking> bookings = new List<Booking>();
            string[] file = File.ReadAllLines(path);
            
            foreach(string s in file){
                string[] split = s.Split(',');
                
                Booking b = new Booking(){Id = int.Parse(split[0]), name = split[1], phoneNum = split[2], partySize = int.Parse(split[3]), date = DateTime.Parse(split[4]),CovidPositive = bool.Parse(split[5]) };
                bookings.Add(b);
                
                
            }
            return bookings;
        }
        public static void UpdateTextFile (string path = "./Bookings.txt"){
                  File.WriteAllText("./Bookings.txt",string.Empty);
                

            using( StreamWriter write = File.AppendText("./Bookings.txt")){

            
           
            
            foreach (Booking book in book){
                 write.WriteLine(book.Id.ToString()+','+book.name+',' + book.phoneNum +',' + book.partySize.ToString()+','+ book.date + ',' + book.CovidPositive.ToString());
            }
            }
        }
        public static int GetMax(){
            return book.Max(b => b.Id);
        }
        
        
        public static List<Booking> GetAllBookings(){
            try
            {
                

                return book;
            }
            catch
            {
                 book = readFile();
             
                return book;
    }
        }
        public bool CreateBooking(Booking booking){
            booking.Id = Bnum++;
            booking.CovidPositive = false;
            //StreamWriter write = new StreamWriter("./Bookings.txt");

            Details d =   DetailsService.readFile();
            int dHour = Convert.ToInt32(d.openTime.Split(":")[0]);
            int dTime = Convert.ToInt32(d.openTime.Split(":")[1]);
            if (dHour > booking.date.Hour){
                Console.WriteLine("Restaurant is closed at this time!");
                return false;
            }
            else{
            
            using( StreamWriter write = File.AppendText("./Bookings.txt")){

            
            write.WriteLine(booking.Id.ToString()+','+booking.name+',' + booking.phoneNum +',' + booking.partySize.ToString()+','+ booking.date + booking.CovidPositive.ToString());
            }
            book.Add(booking);
            return true;
            }
        }
        public static List<Booking> GetByDate( DateTime date){
            //DateTime sDate = DateTime.Parse(date);
            IEnumerable<Booking> query = book.Where(book => book.date.Date == date.Date);
            List<Booking> list = query.ToList<Booking>();
            for (int i = 0; i < query.Count(); i++)
            {
                
                list[i].date.ToString().Replace("T", " ");
            }
            return query.ToList<Booking>();
        }
        public static void Delete(int id){
            book.RemoveAll(n => n.Id == id);
            UpdateTextFile();
          
        }
        public static void MarkCovidPos(int id){
            foreach(Booking booking in book){
                if(booking.Id == id){
                    if (booking.CovidPositive == true) booking.CovidPositive = false;
                    else booking.CovidPositive = true;
                }
            }
            UpdateTextFile();
                   

        }
    }

}

