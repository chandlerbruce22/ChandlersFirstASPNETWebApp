using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ChandlersFirstASPNETWebApp.Models
{
    public class CalculatorModel
    {
        
        [Required(ErrorMessage = "Make sure all fields are filled out!")]
        [Range(0, 100, ErrorMessage = "Make sure your numbers are between 0 and 100!")]
        public int assignments { get; set; }

        [Required(ErrorMessage = "Make sure all fields are filled out!")]
        [Range(0, 100, ErrorMessage = "Make sure your numbers are between 0 and 100!")]
        public int projects { get; set; }

        [Required(ErrorMessage = "Make sure all fields are filled out!")]
        [Range(0, 100, ErrorMessage = "Make sure your numbers are between 0 and 100!")]
        public int quizzes { get; set; }

        [Required(ErrorMessage = "Make sure all fields are filled out!")]
        [Range(0, 100, ErrorMessage = "Make sure your numbers are between 0 and 100!")]
        public int exams { get; set; }

        [Required(ErrorMessage = "Make sure all fields are filled out!")]
        [Range(0, 100, ErrorMessage = "Make sure your numbers are between 0 and 100!")]
        public int intex { get; set; }

    }
}
