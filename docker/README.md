# Docker Monitoring with Grafana Alloy

This example demonstrates how to setup a Grafana Alloy container with Loki for logs and Jaeger for traces. The setup uses Docker Compose to orchestrate the services.

## Prerequisites

- Docker
- Docker Compose
- Git

## Running the Demo

### Step 1: Clone the repository

```bash
git clone https://github.com/edvansts/frontend-observability-poc.git
```

### Step 2: Deploy the monitoring stack

```bash
cd docker-setup
docker-compose up -d
```

### Step 3: Access Grafana Alloy UI

Open your browser and go to `http://localhost:12345`.

### Step 4: Access Grafana UI

Open your browser and go to `http://localhost:3000`.
