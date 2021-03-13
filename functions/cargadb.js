const { Conection, adicional } = require('../database')


traeHome = () => {
    const home = Conection.query('select id, seccion, IDhtml, valor_cfg from config where seccion=' + "'" + 'home' + "' order by id desc")
    Conection.off
    return home
}
traeAdicional = () => {
    const adicionall = Conection.query('select * from additionals')
    Conection.off
    return adicionall
}
traeHomeTwo = (seccion) => {
    const home = Conection.query('select id, valor_cfg from config where seccion=' + "'" + seccion + "' order by id desc")
    Conection.off
    return home
}

traelink = (link) => {
    const direccion = Conection.query('select  valor_cfg from config where IDhtml=' + "'" + link + "'")
    Conection.off
    return direccion
}

traeExlaboral = () => {
    const Exlaboral = Conection.query('select IDhtml, valor_cfg from config where seccion=' + "'" + 'exlaboral' + "' order by id desc")
    Conection.off
    return Exlaboral
}

traeTiyDesEstudiosRe = () => {
    const TiyDesEstudiosRe = Conection.query('select IDhtml, valor_cfg from config where seccion=' + "'" + 'estudiosRe' + "' order by id desc")
    Conection.off
    return TiyDesEstudiosRe
}
traeExlaboralDet = () => {
    const ExlaboralDet = Conection.query('select * from ExLaboral')
    Conection.off
    return ExlaboralDet
}

traeEstudiosRe = () => {
    const EstudiosRe = Conection.query('select * from EstudiosRealizados')
    Conection.off
    return EstudiosRe
}
traeEstudiosReDet = (id) => {
    const EstudiosReDet = Conection.query('select * from EstudiosRealizados  where id=' + id)
    Conection.off
    return EstudiosReDet
}

traeExlaboralDetLwLu = (id) => {
    const ExlaboralDetLwLu = Conection.query('select link_web,link_ubi from ExLaboral  where id=' + id)
    Conection.off
    return ExlaboralDetLwLu
}


eliminardor = (tabla, id) => {
    const eliminator = Conection.query('delete from ' + tabla + ' where id=' + id)
    Conection.off
    return eliminator
}
guardaEstudiosRealizados = (nombre_institucion, titulo_optenido, perfil_egresado, disiplina, link_w, link_u, periodo_curso, link_c, M_certificado) => {
    const EstudiosRealizados = Conection.query(' INSERT INTO EstudiosRealizados (`nombre_institucion`, `titulo_optenido`, `perfil_egresado`, `disiplina`, `link_w`, `link_u`, `periodo_curso`, `link_c`, `M_certificado`) VALUES (' + "'" + nombre_institucion + "'" + ', ' + "'" + titulo_optenido + "'" + ', ' + "'" + perfil_egresado + "'" + ', ' + "'" + disiplina + "'" + ', ' + "'" + link_w + "'" + ', ' + "'" + link_u + "'" + ', ' + "'" + periodo_curso + "'" + ', ' + "'" + link_c + "'" + ', ' + "'" + M_certificado + "'" + ');')
    Conection.off
    return EstudiosRealizados
}
guardaHerramientas = (seccion, IDhtml, valor_cfg) => {

    const Herramientas = Conection.query('INSERT INTO config (`seccion`, `IDhtml`, `valor_cfg`) VALUES (' + "'" + seccion + "'" + ', ' + "'" + IDhtml + "'" + ', ' + "'" + valor_cfg + "'" + ');')
    Conection.off
    return Herramientas
}
guardaExperienciaDet = (emprasa, cargo, tareas, link_w, link_u) => {
    const ExperienciaDet = Conection.query('  INSERT INTO ExLaboral (`nombre_emp`, `cargo_des`, `tareas_real`, `link_web`, `link_ubi`) VALUES (' + "'" + emprasa + "'" + ', ' + "'" + cargo + "'" + ', ' + "'" + tareas + "'" + ', ' + "'" + link_w + "'" + ', ' + "'" + link_u + "'" + ');')
    Conection.off
    return ExperienciaDet
}
modificaConfig = (id, campo, valor) => {
    const modifica = Conection.query('update config set ' + campo + '=' + "'" + valor + "'" + 'where id=' + id)
    Conection.off
    return modifica
}
modificaExperiencia = (empresa, cargo, tareas, link_w, link_u, id_ex) => {
    let sql = ('UPDATE ExLaboral SET nombre_emp=' + "'" + empresa + "'" + ', cargo_des=' + "'" + cargo + "'" + ', tareas_real=' + "'" + tareas + "'" + ', link_web=' + "'" + link_w + "'" + ', link_ubi=' + "'" + link_u + "'" + ' WHERE  id=' + id_ex)
    const modificaExp = Conection.query(sql)
    Conection.off
    return modificaExp
}
modificaEstudios = (nombre_institucion, titulo_optenido, perfil_egresado, disiplina, link_w, link_u, periodo_curso, link_c, M_certificado, id) => {
    let sql = ('UPDATE EstudiosRealizados SET `nombre_institucion`=' + "'" + nombre_institucion + "'" + ', `titulo_optenido`=' + "'" + titulo_optenido + "'" + ', `perfil_egresado`=' + "'" + perfil_egresado + "'" + ', `disiplina`=' + "'" + disiplina + "'" + ', `link_w`=' + "'" + link_w + "'" + ', `link_u`=' + "'" + link_u + "'" + ', `periodo_curso`=' + "'" + periodo_curso + "'" + ', `link_c`=' + "'" + link_c + "'" + ', `M_certificado`=' + "'" + M_certificado + "'" + ' WHERE  `id`=' + id)
    const modificaEstudio = Conection.query(sql)
    Conection.off
    return modificaEstudio
}

modificaReferencias = (nombre, cargo, referencia, link, id) => {
    let sql = ('UPDATE referencias SET `nombre_ref`=' + "'" + nombre + "'" + ', `cargo_ref`=' + "'" + cargo + "'" + ', `refencia`=' + "'" + referencia + "'" + ', `Link_ref`=' + "'" + link + "'" + ' WHERE  `id`=' + id)
    const modificaReferencias = Conection.query(sql)
    Conection.off
    return modificaReferencias
}

creaReferencias = (nombre, cargo, referencia, link) => {
    const creaRef = Conection.query('INSERT INTO referencias (`nombre_ref`, `cargo_ref`, `refencia`, `Link_ref`) VALUES (' + "'" + nombre + "'" + ', ' + "'" + cargo + "'" + ', ' + "'" + referencia + "'" + ', ' + "'" + link + "'" + ');')
    Conection.off
    return creaRef
}
traeReferencias = () => {
    const traeRef = Conection.query('select * from referencias')
    Conection.off
    return traeRef
}

traeReferenciasdet = (id) => {
    const traeRefDet = Conection.query('select Link_ref from referencias where id=' + id)
    Conection.off
    return traeRefDet
}
module.exports = { traeHome, traelink, traeExlaboral, guardaExperienciaDet, traeExlaboralDet, eliminardor, modificaExperiencia, traeExlaboralDetLwLu, traeTiyDesEstudiosRe, guardaEstudiosRealizados, traeEstudiosRe, modificaEstudios, traeEstudiosReDet, guardaHerramientas, modificaConfig, traeHomeTwo, creaReferencias, traeReferencias, modificaReferencias, traeAdicional, traeReferenciasdet }
