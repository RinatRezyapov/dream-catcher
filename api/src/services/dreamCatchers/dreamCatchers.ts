import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const dreamCatchers: QueryResolvers['dreamCatchers'] = () => {
  return db.dreamCatcher.findMany()
}

export const dreamCatcher: QueryResolvers['dreamCatcher'] = ({ id }) => {
  return db.dreamCatcher.findUnique({
    where: { id },
  })
}

export const createDreamCatcher: MutationResolvers['createDreamCatcher'] = ({
  input,
}) => {
  return db.dreamCatcher.create({
    data: input,
  })
}

export const updateDreamCatcher: MutationResolvers['updateDreamCatcher'] = ({
  id,
  input,
}) => {
  return db.dreamCatcher.update({
    data: input,
    where: { id },
  })
}

export const deleteDreamCatcher: MutationResolvers['deleteDreamCatcher'] = ({
  id,
}) => {
  return db.dreamCatcher.delete({
    where: { id },
  })
}
