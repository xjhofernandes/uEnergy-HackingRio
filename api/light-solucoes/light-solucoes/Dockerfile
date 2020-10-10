#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
WORKDIR /src
COPY ["light-solucoes/light-solucoes.csproj", "light-solucoes/"]
RUN dotnet restore "light-solucoes/light-solucoes.csproj"
COPY . .
WORKDIR "/src/light-solucoes"
RUN dotnet build "light-solucoes.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "light-solucoes.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "light-solucoes.dll"]