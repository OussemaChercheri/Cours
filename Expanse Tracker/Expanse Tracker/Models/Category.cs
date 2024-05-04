using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Expanse_Tracker.Models
{
    public class Category
    {
        [Key]
        public int CategoryId { get; set; }

        [Column (TypeName = "nvvarchar(50)")]
        public string Title { get; set; }

        [Column(TypeName = "nvvarchar(5)")]
        public string Icon { get; set; } = "";

        [Column(TypeName = "nvvarchar(10)")]
        public string Type { get; set; } = "Expanse";

    }
}
