using COMP1004SPA.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.IO;

namespace COMP1004SPA.Services{
    public class BookingService {
        public static List<Booking> book = readFile();
        public static List<Booking> readFile(string path ="./Bookings.txt"){
            List<Booking> bookings = new List<Booking>();
            string[] file = File.ReadAllLines(path);
            foreach(string s in file){
                string[] split = s.Split(',');
                
                Booking b = new Booking(){Id = int.Parse(split[0]), name = split[1], phoneNum = split[2], partySize = int.Parse(split[3]), date = DateTime.Parse(split[4]) };
                bookings.Add(b);
                
            }
            return bookings;
        }
        public static int Bnum = book.Count(); 
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
        public Booking CreateBooking(Booking booking){
            booking.Id = Bnum++;
            //StreamWriter write = new StreamWriter("./Bookings.txt");
            using( StreamWriter write = File.AppendText("./Bookings.txt")){

            
            write.WriteLine("\n" + booking.Id.ToString()+','+booking.name+',' + booking.phoneNum +',' + booking.partySize.ToString()+','+ booking.date);
            }
            book.Add(booking);
            return booking;
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
        
    }

}

