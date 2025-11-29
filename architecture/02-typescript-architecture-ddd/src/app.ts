import express from 'express'

import { titlesMock } from './catalog/infrastructure/persistence/mocks/titles.mock';
import { InMemoryTitleRepository } from './catalog/infrastructure/persistence/mocks/in-memory-title.repository';

import { ListTitlesUseCase } from './catalog/application/list-titles.usecase';
import { TitleController } from './catalog/infrastructure/htpp/title.controller';
import { createTitleRouter } from './catalog/infrastructure/htpp/title.router';

const app = express()
const port = 3000

app.use(express.json())

const repo = new InMemoryTitleRepository(titlesMock)
const usecase = new ListTitlesUseCase(repo)
const controller = new TitleController(usecase)

app.use('/api/titles', createTitleRouter(controller))

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
