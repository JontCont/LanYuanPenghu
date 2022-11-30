using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;

var builder = WebApplication.CreateBuilder(args);
var Configuration = new ConfigurationBuilder()
                      .SetBasePath(Directory.GetCurrentDirectory())
                      .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                      .Build();
// Add services to the container.
builder.Services.AddControllers();

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(
        builder =>
        {
            builder.AllowAnyHeader().AllowAnyOrigin().AllowAnyMethod();
        });

    options.AddPolicy("AnotherPolicy",
        builder =>
        {
            builder.AllowAnyOrigin()
                    .AllowAnyHeader()
                    .AllowAnyMethod();
        });
});

builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultScheme = CookieAuthenticationDefaults.AuthenticationScheme;
    //options.DefaultChallengeScheme = OpenIdConnectDefaults.AuthenticationScheme;
})
.AddJwtBearer(options =>
{
    // �����ҥ��ѮɡA�^�����Y�|�]�t WWW-Authenticate ���Y�A�o�̷|��ܥ��Ѫ��Բӿ��~��]
    options.IncludeErrorDetails = true; // �w�]�Ȭ� true�A���ɷ|�S�O����

    options.TokenValidationParameters = new TokenValidationParameters
    {
        // �z�L�o���ŧi�A�N�i�H�q "sub" ���Ȩó]�w�� User.Identity.Name
        NameClaimType = "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier",
        // �z�L�o���ŧi�A�N�i�H�q "roles" ���ȡA�åi�� [Authorize] �P�_����
        RoleClaimType = "http://schemas.microsoft.com/ws/2008/06/identity/claims/role",

        // �@��ڭ̳��|���� Issuer
        ValidateIssuer = true,
        ValidIssuer = Configuration.GetValue<string>("JwtSettings:Issuer"),

        // �q�`���ӻݭn���� Audience
        ValidateAudience = false,
        //ValidAudience = "JwtAuthDemo", // �����ҴN���ݭn��g

        // �@��ڭ̳��|���� Token �����Ĵ���
        ValidateLifetime = true,

        // �p�G Token ���]�t key �~�ݭn���ҡA�@�볣�u��ñ���Ӥw
        ValidateIssuerSigningKey = false,

        // "1234567890123456" ���ӱq IConfiguration ���o
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration.GetValue<string>("JwtSettings:SignKey")))
    };
    options.Events = new JwtBearerEvents
    {
        OnMessageReceived = context =>
        {
            var accessToken = context.Request.Cookies["x-access-token"];

            if (!string.IsNullOrEmpty(accessToken))
            {
                context.Token = accessToken;
            }

            return Task.CompletedTask;
        }
    };
})
.AddCookie(options =>
{
    options.EventsType = typeof(CookieAuthenticationEventsExetensions);
    options.ExpireTimeSpan = TimeSpan.FromMinutes(1);
    options.Cookie.Name = "user-session";
    options.SlidingExpiration = true;
});


// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();



var app = builder.Build();
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
