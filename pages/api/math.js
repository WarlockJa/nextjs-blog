export default function math(req, res) {
    if(!req.query) { res.status(403).json({ 'message': 'Parameters not found' }); };
    let result = null;
    try {
        result = req.query.a * req.query.b;
    } catch (error) {
        res.status(403).json({ 'message': error });
    }
    res.status(200).json({ 'message': `The result is: ${result}`});
}
