export function getFriends(req: any, res: any) {
  const friends = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jack' },
  ];

  return res.json(friends).status(200);
}
