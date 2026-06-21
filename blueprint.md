# Project: Ugent

Build an n8n-like agent flow builder, but only focused on AI agent workflow execution.

## Tech Stack

Frontend:
- Next.js
- TypeScript
- React Flow
- TailwindCSS

Backend:
- .NET 8 Web API
- Entity Framework Core
- SQL Server or PostgreSQL
- Hangfire or BackgroundService
- RabbitMQ later

## Solution Structure

Ugent.sln
- Ugent.Api
- Ugent.Application
- Ugent.Domain
- Ugent.Infrastructure
- Ugent.Worker
- Ugent.Shared

## Code Rules

- All CSS class names must use the `cug-` prefix.
- Do not write inline CSS or inline style attributes.
- Always write styles in CSS files.

## MVP Goal

Build this flow first:

Start → AI Agent → HTTP Request → Output

## Core Features

1. Flow Builder UI
- Drag and drop nodes
- Connect nodes with edges
- Edit node config
- Save flow JSON
- Run flow manually

2. Flow API
- Create flow
- Update flow
- Get flow
- Delete flow
- Run flow

3. Runtime Engine
- Read flow JSON
- Find start node
- Execute node by node
- Pass output from previous node to next node
- Save execution logs

4. Node Types

StartNode:
- Receives initial input

AgentNode:
- prompt
- model
- temperature
- inputMapping
- output

HttpRequestNode:
- url
- method
- headers
- body

OutputNode:
- final result

## Database Tables

Flows
- Id
- Name
- Description
- CurrentVersionId
- CreatedAt
- UpdatedAt

FlowVersions
- Id
- FlowId
- Version
- FlowJson
- CreatedAt

FlowExecutions
- Id
- FlowId
- FlowVersionId
- Status
- InputJson
- OutputJson
- StartedAt
- FinishedAt
- ErrorMessage

FlowExecutionLogs
- Id
- ExecutionId
- NodeId
- NodeType
- Status
- InputJson
- OutputJson
- StartedAt
- FinishedAt
- ErrorMessage

## Flow JSON Example

{
  "nodes": [
    {
      "id": "start_1",
      "type": "start",
      "position": { "x": 100, "y": 100 },
      "config": {}
    },
    {
      "id": "agent_1",
      "type": "ai_agent",
      "position": { "x": 350, "y": 100 },
      "config": {
        "prompt": "Analyze this input: {{input.text}}",
        "model": "gpt-4.1-mini",
        "temperature": 0.3
      }
    },
    {
      "id": "http_1",
      "type": "http_request",
      "position": { "x": 600, "y": 100 },
      "config": {
        "method": "POST",
        "url": "https://example.com/api/save",
        "body": "{{agent_1.output}}"
      }
    },
    {
      "id": "output_1",
      "type": "output",
      "position": { "x": 850, "y": 100 },
      "config": {}
    }
  ],
  "edges": [
    { "id": "e1", "source": "start_1", "target": "agent_1" },
    { "id": "e2", "source": "agent_1", "target": "http_1" },
    { "id": "e3", "source": "http_1", "target": "output_1" }
  ]
}

## First Task

Create the .NET 8 solution structure, domain entities, DTOs, EF Core DbContext, basic CRUD API for Flows, and a simple FlowRuntimeService that can execute StartNode and OutputNode first.
