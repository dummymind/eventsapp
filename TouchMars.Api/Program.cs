using Microsoft.EntityFrameworkCore;
using TouchMars.Api.Mappers;
using TouchMars.Infrastructure;
using TouchMars.Services;
using TouchMars.Services.Interfaces;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddControllers();
builder.Services.AddDbContext<TouchMarsDbContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
});

//builder.Services.AddDbContext<TouchMarsDbContext>(opt =>
//    opt.UseInMemoryDatabase("EventDetails"));

builder.Services.AddScoped<IEventDetailsService, EventDetailsService>();
builder.Services.AddScoped<IGeoService, GeoService>();

builder.Services.AddCors(p => p.AddPolicy("corsapp", builder =>
{
    builder.WithOrigins("*").AllowAnyMethod().AllowAnyHeader();
}));

builder.Services.AddAutoMapper((serviceProvider, mapperConfiguration) =>
{
    using IServiceScope scope = serviceProvider.CreateScope();
    scope.ServiceProvider.GetRequiredService<TouchMarsDbContext>();
    mapperConfiguration.AddProfile(new EventDetailsProfile(scope.ServiceProvider.GetRequiredService<IGeoService>(), scope.ServiceProvider.GetRequiredService<IEventDetailsService>()));
}, Array.Empty<Type>());

builder.Services.AddAutoMapper(typeof(Program));
var app = builder.Build();


// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors("corsapp");
//app.UseAuthorization();
app.MapControllers();


app.Run();
