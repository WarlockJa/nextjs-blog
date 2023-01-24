export default function math(req, res) {
    if(req.body) {res.sendStatus(403); };
    const result = req.body.a + req.body.b;
    res.status(200).json({ 'message': `The sum is: ${result}`});
}
