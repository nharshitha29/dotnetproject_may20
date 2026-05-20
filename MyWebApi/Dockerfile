FROM mcr.microsoft.com/dotnet/sdk:8.0 As Builder
LABEL project=learning
LABEL version=8.0
WORKDIR /app
COPY . /app
RUN dotnet publish -c Release -o  published

FROM  mcr.microsoft.com/dotnet/aspnet:8.0-alpine
RUN adduser -D -h /app -s /bin/sh spc
USER spc
WORKDIR /app
COPY  --from=Builder --chown=spc:spc  /app/published /app
ENV ASPNETCORE_URLS=http://+:8080
EXPOSE 8080
CMD ["dotnet", "MyWebApi.dll"]