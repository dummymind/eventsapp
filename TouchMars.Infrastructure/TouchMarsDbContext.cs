using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics;
using System.Linq;
using System.Reflection.Emit;
using System.Reflection.Metadata;
using System.Text;
using System.Threading.Tasks;
using TouchMars.Domain.Models;

namespace TouchMars.Infrastructure
{
    public class TouchMarsDbContext : DbContext
    {
        public TouchMarsDbContext(DbContextOptions<TouchMarsDbContext> context) : base(context)
        {

        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    => optionsBuilder
        .LogTo(Console.WriteLine)
        .EnableSensitiveDataLogging();
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            var eventDetails = modelBuilder.Entity<EventDetailsDto>();
            eventDetails.HasKey(x => x.ID);
            eventDetails.Property(x => x.ID).ValueGeneratedOnAdd();

            var eventmaster = modelBuilder.Entity<EventMasterDto>();
            eventmaster.HasKey(x => x.ID);
            eventmaster.Property(x => x.ID).ValueGeneratedOnAdd();

           

        }
        public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = default(CancellationToken))
        {
            var entities = from e in ChangeTracker.Entries()
                           where e.State == EntityState.Added
                               || e.State == EntityState.Modified
                           select e.Entity;
            foreach (var entity in entities)
            {
                var validationContext = new ValidationContext(entity);
                Validator.ValidateObject(entity, validationContext);
            }

            return base.SaveChangesAsync();
        }
        public virtual DbSet<EventDetailsDto> EventDetail { get; set; }
        public virtual DbSet<EventMasterDto> EventMaster { get; set; }
        public virtual DbSet<CountryDto> Country { get; set; }
        public virtual DbSet<StateDto> State { get; set; }
        public virtual DbSet<CityDto> City { get; set; }
        public virtual DbSet<UsersDto> Users { get; set; }
        public virtual DbSet<EventStatusDto> EventStatus {  get; set; }

    }
}

