FROM mcr.microsoft.com/dotnet/sdk:8.0-alpine
LABEL project=learning
LABEL version=8.0
EXPOSE 8000
RUN adduser -D -h /app -s /bin/sh spc
USER spc
WORKDIR /app
COPY . /app
RUN dotnet publish -c Release -o  published
CMD ["dotnet", "published/MyWebApi.dll"]