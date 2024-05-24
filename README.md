
# 💻 SYSTEM MONITOR

System Monitor is a small project built with Node.js for Docker that launches a REST API using Express and allows users to collect various machine characteristics:

- CPU temperature
- RAM usage
- Disk space usage

It is compatible only with Linux distributions.  
Builds for **amd64** and **arm64** avaliable in [DockerHub/borrageiros](https://hub.docker.com/repository/docker/borrageiros/sys-monitor/tags)  
It is designed to be deployed on a server.  
It does not provide information about the graphics card.  
It is compatible with Docker.  
Basic authorization with preestablished API KEY (env).
## ☝ | Examples

**REQUEST**:  

- GET http://localhost:3000/thisIsAnApiKey

**RESPONSE**:
```
{
    "cpu": {
        "temperature": {
            "main": 39.92,
            "cores": [],
            "max": 39.92,
            "socket": [],
            "chipset": null
        }
    },
    "memory": {
        "total": "3.70",
        "used": "3.49",
        "free": "0.21"
    },
    "disk": [
        {
            "filesystem": "overlay",
            "size": "458.16",
            "used": "17.74",
            "available": "440.41"
        },
        {
            "filesystem": "/dev/sda2",
            "size": "458.16",
            "used": "17.74",
            "available": "440.41"
        },
        {
            "filesystem": "/dev/sda1",
            "size": "0.25",
            "used": "0.13",
            "available": "0.11"
        }
    ]
}
```
## 🚧 | Prerequisites

- [Docker](https://www.docker.com/) (Recomended)
> or
- [Node.js >= 20](https://nodejs.org/en/download/)
> or
- [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)
## 📝 | Installation

## **Docker**

```
docker run -d \
    --name=sys-monitor \
    -p 3000:3000 \
    -e API_KEY=password1234 \
    --privileged \
    --volume /:/host \
    borrageiros/sys-monitor
```
***
- --privileged  
and  
- --volume /:/host  
are necessary to get the HOST information, not the Docker container stats
***
## **Node**

- **Install requirements**
    ```bash
    npm install
    ```
    > or  
    ```bash
    yarn
    ```
    > This command installs the required dependencies.

- **Configuration**
    - Environment variables:
    ```plaintext
    API_KEY=
    ```
- **Start server**

    ```bash
    node app.js
    ```
