using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Tutor
{
    public class State
    {
        public string Adress { get; set; }
        public int Price { get; set; }
        public int SquareFootage { get; set; }

        public int CalculatePricePerSquareFootage()=>Price / SquareFootage;
    }
}