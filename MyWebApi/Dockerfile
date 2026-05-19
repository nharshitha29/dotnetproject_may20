FROM mcr.microsoft.com/dotnet/sdk:8.0-alpine
LABEL project=learning
LABEL version=8.0
WORKDIR /app
COPY . /app
RUN dotnet publish -c Release -o  published
RUN adduser -D -h /app -s /bin/sh spc
USER spc
EXPOSE 8000



CMD ["dotnet", "published/MyWebApi.dll"]