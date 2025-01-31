import { Collection, Identifier, JSCodeshift } from "jscodeshift";

import { getClientIdNamesFromNewExpr } from "./getClientIdNamesFromNewExpr";
import { getClientIdNamesFromTSTypeRef } from "./getClientIdNamesFromTSTypeRef";
import { getClientIdThisExpressions, ThisMemberExpression } from "./getClientIdThisExpressions";

export interface GetClientIdentifiersOptions {
  v2ClientName: string;
  v2ClientLocalName: string;
  v2GlobalName?: string;
}

export type ClientIdentifier = Identifier | ThisMemberExpression;

export const getClientIdentifiers = (
  j: JSCodeshift,
  source: Collection<unknown>,
  options: GetClientIdentifiersOptions
): ClientIdentifier[] => {
  const namesFromNewExpr = getClientIdNamesFromNewExpr(j, source, options);
  const namesFromTSTypeRef = getClientIdNamesFromTSTypeRef(j, source, options);
  const clientIdNames = [...new Set([...namesFromNewExpr, ...namesFromTSTypeRef])];

  const clientIdentifiers: Identifier[] = clientIdNames.map((clientidName) => ({
    type: "Identifier",
    name: clientidName,
  }));
  const clientIdThisExpressions = getClientIdThisExpressions(j, source, clientIdentifiers);

  return [...clientIdentifiers, ...clientIdThisExpressions];
};
