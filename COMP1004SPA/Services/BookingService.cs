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
                DateTime bDate = DateTime.Parse(split[4]);
                Booking b = new Booking(){Id = int.Parse(split[0]), name = split[1], phoneNum = split[2], partySize = int.Parse(split[3]), date = bDate };
                bookings.Add(b);
                
            }
            return bookings;
        }
        public static int Count = book.Count(); 
        public static List<Booking> GetAllBookings(){
            return book;
        }
        
    }

}

