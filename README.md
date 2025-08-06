# Frontend Observability POC

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=flat&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-7.0.4-646CFF?style=flat&logo=vite)
![Grafana Faro](https://img.shields.io/badge/Grafana%20Faro-1.19.0-F46800?style=flat&logo=grafana)

Um Proof of Concept (POC) demonstrando a implementação de observabilidade frontend usando **Grafana Faro**, **React Router** e **React 18**. Este projeto showcases uma implementação completa de instrumentação de observabilidade recursiva em uma aplicação React moderna.

## 🎯 Objetivos do Projeto

- **Observabilidade Completa**: Implementar rastreamento, métricas e logs em toda a aplicação
- **Instrumentação Automática**: Aplicar profiling recursivo a todas as rotas e componentes
- **Performance Monitoring**: Monitorar performance, erros e comportamento do usuário
- **Real User Monitoring (RUM)**: Coletar dados reais de usuários em produção

## 🚀 Principais Tecnologias

### Frontend Stack

- **React 18.3.1**: Biblioteca principal com concurrent features
- **React Router DOM 6.30.1**: Roteamento client-side avançado

### Observabilidade

- **Grafana Faro React 1.19.0**: SDK de observabilidade frontend
  - **Session Tracking**: Rastreamento de sessões de usuário
  - **Error Boundary**: Captura automática de erros React
  - **Web Instrumentations**: Métricas automáticas de Web APIs (Fetch, XHR, etc.)
  - **React Integration**: Instrumentação específica para componentes React
  - **Real User Monitoring**: Coleta de métricas reais de performance do usuário
  - **Custom Events**: Suporte para eventos e métricas customizadas
- **Grafana Faro Web Tracing 1.19.0**: Instrumentação de tracing automática
  - **Distributed Tracing**: Correlação entre frontend e backend
  - **Performance Spans**: Rastreamento detalhado de operações
  - **OpenTelemetry Compatible**: Padrão aberto para observabilidade

### Monitoramento (Docker)

- **Grafana 12.0.2**: Dashboard e visualização de dados
- **Loki 3.5.2**: Agregação e armazenamento de logs
- **Jaeger 1.53**: Distributed tracing
- **Grafana Alloy v1.10.0**: Collector de observabilidade

## 🏗️ Arquitetura da Aplicação

### Estrutura de Rotas

```
/                           # Home page
/hello-world                # Página de exemplo
/dashboard/                 # Dashboard principal
├── analytics               # Análises e métricas
├── reports                 # Relatórios e exportação
└── settings/              # Configurações (rotas aninhadas)
    ├── (index)            # Configurações gerais
    ├── profile            # Configurações de perfil
    └── notifications      # Configurações de notificação
```

### Instrumentação de Observabilidade

#### 1. Inicialização Central

```typescript
// src/services/observability/index.ts
export const initializeObservability = () => {
  return initializeFaro({
    url: "http://localhost:12347/collect",
    app: {
      name: "frontend-observability-poc",
      version: "0.1alpha",
      environment: "development",
    },
    instrumentations: [
      ...getWebInstrumentations(),
      new TracingInstrumentation(),
      new ReactIntegration({
        router: createReactRouterV6DataOptions({
          matchRoutes,
        }),
      }),
    ],
    sessionTracking: {
      enabled: true,
      samplingRate: 1,
      persistent: true,
    },
  });
};
```

#### 2. Profiling Recursivo de Rotas

A implementação aplica automaticamente profiling a **todas as rotas**, incluindo rotas aninhadas:

```typescript
// src/services/router/index.tsx
const addObservabilityToRoutes = (routes: RouteObject[]): RouteObject[] => {
  return routes.map((route) => {
    const processedRoute: RouteObject = { ...route };

    // Aplica profiling ao elemento da rota
    if (route.element && isValidElement(route.element)) {
      processedRoute.element = createProfiledWrapper(
        route.element as ReactElement
      );
    }

    // Processa recursivamente rotas filhas
    if (route.children && route.children.length > 0) {
      processedRoute.children = addObservabilityToRoutes(route.children);
    }

    return processedRoute;
  });
};
```

#### 3. Error Boundary Global

```typescript
// src/main.tsx
<ObservabilityErrorBoundary>
  <RouterProvider router={ROUTER} future={{ v7_startTransition: true }} />
</ObservabilityErrorBoundary>
```

## 🛠️ Como Executar

### Pré-requisitos

- Node.js 18+
- npm ou yarn
- Docker e Docker Compose (para o stack de monitoramento)

### 1. Instalação da Aplicação

```bash
# Clone o repositório
git clone https://github.com/edvansts/frontend-observability-poc.git
cd frontend-observability-poc

# Instale as dependências
npm install

# Execute em modo desenvolvimento
npm run dev
```

A aplicação estará disponível em: `http://localhost:5173`

### 2. Build de Produção

```bash
# Gerar build otimizado
npm run build

# Visualizar build local
npm run preview

# Executar linting
npm run lint
```

## 🐳 Executando o Stack de Monitoramento (Docker)

O projeto inclui um stack completo de observabilidade usando Docker Compose.

### Pré-requisitos Docker

- Docker Engine 20.0+
- Docker Compose 2.0+

### Iniciando o Stack de Monitoramento

```bash
# Navegue para a pasta docker
cd docker

# Execute o stack completo
docker-compose up -d

# Visualize os logs (opcional)
docker-compose logs -f

# Pare o stack
docker-compose down
```

### Serviços Disponíveis

| Serviço            | URL                    | Descrição                           |
| ------------------ | ---------------------- | ----------------------------------- |
| **Grafana**        | http://localhost:3000  | Dashboard principal e visualizações |
| **Grafana Alloy**  | http://localhost:12345 | Interface do collector              |
| **Jaeger UI**      | http://localhost:16686 | Interface de tracing distribuído    |
| **Loki**           | http://localhost:3100  | API de logs (interno)               |
| **Faro Collector** | http://localhost:12347 | Endpoint de coleta de dados         |

### Configuração dos Datasources

O Grafana é configurado automaticamente com:

- **Loki**: Para logs da aplicação frontend
- **Jaeger**: Para traces e spans de performance

#### Acessando o Grafana

1. Abra http://localhost:3000
2. Login é automático (anonymous auth habilitado)
3. Datasources são provisionados automaticamente
4. Comece criando dashboards ou explore os dados existentes

## 📊 Funcionalidades de Observabilidade

### 1. **Real User Monitoring (RUM)**

- Métricas de performance (LCP, FID, CLS)
- Tempos de carregamento de páginas
- Interações do usuário
- Erros JavaScript em tempo real

### 2. **Tracing Distribuído**

- Spans automáticos para navegação de rotas
- Trace de componentes React com profiling
- Métricas de rendering e lifecycle
- Correlação entre frontend e backend

### 3. **Session Tracking**

- Identificação única de sessões
- Jornada completa do usuário
- Detecção de bots automática
- Sampling rate configurável

### 4. **Error Monitoring**

- Captura automática de erros React
- Stack traces detalhados
- Contexto da aplicação no momento do erro
- Notificações em tempo real

### 5. **Performance Profiling**

- Component render times
- Route transition performance
- Bundle size analytics
- Memory usage tracking

## 🎛️ Configurações Avançadas

### Sampling de Bots

O sistema detecta automaticamente bots e ajusta a taxa de sampling:

```typescript
function getSamplingFactor() {
  const isBot = botsRegex.test(navigator.userAgent);
  return isBot ? 0 : 1; // Sem sampling para bots
}
```

### Instrumentações Customizadas

Adicione instrumentações específicas no `initializeObservability()`:

```typescript
instrumentations: [
  ...getWebInstrumentations(),        // Web APIs padrão
  new TracingInstrumentation(),       // Distributed tracing
  new ReactIntegration({             // React-specific
    router: createReactRouterV6DataOptions({
      matchRoutes,
    }),
  }),
  // Adicione suas instrumentações customizadas aqui
],
```

## 🔧 Desenvolvimento

### Estrutura do Projeto

```
src/
├── dashboard/                 # Componentes do dashboard
│   ├── settings/             # Rotas aninhadas de configurações
│   ├── dashboard-layout.tsx  # Layout principal
│   ├── analytics.tsx         # Página de analytics
│   └── reports.tsx          # Página de relatórios
├── home/                     # Página inicial
├── hello-world/              # Página de exemplo
├── services/
│   ├── observability/        # Configuração do Faro
│   └── router/              # Router com profiling recursivo
├── routes.tsx               # Definição das rotas
└── main.tsx                # Entry point com error boundary
```

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch: `git checkout -b feature/nova-funcionalidade`
3. Commit suas mudanças: `git commit -m 'Adiciona nova funcionalidade'`
4. Push: `git push origin feature/nova-funcionalidade`
5. Abra um Pull Request

## 🙋‍♂️ Suporte

- **Documentação**: [Grafana Faro Docs](https://grafana.com/docs/grafana-cloud/monitor-applications/frontend-observability/)
- **Discussions**: [GitHub Discussions](https://github.com/edvansts/frontend-observability-poc/discussions)

---

⭐ **Se este projeto foi útil, deixe uma estrela no repositório!**
