using System;
using System.ComponentModel.DataAnnotations;

namespace Backend.Context.Entities
{
    public class Message
    {
        public int Id { get; set; }

        [Required]
        public string Content { get; set; }

        public User Reciever { get; set; }

        [Required]
        public int RecieverId { get; set; }

        [Required]
        public User Sender { get; set; }

        public int SenderId { get; set; }

        public DateTime SentAt { get; set; } = DateTime.Now;


    }
}