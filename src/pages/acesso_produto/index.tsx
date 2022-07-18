import { useState, FormEvent, useEffect } from 'react'
import Head from 'next/head'
import { Sidebar } from '../../components/Header'
import styles from './acesso_produto.module.scss'
// import { setUpAPIClient } from '../../services/api'
// import { toast } from 'react-toastify'
import { canSSRAuth } from '../../utils/canSSRAuth'
import { api } from '../../services/apiCliente'
import { Button40 } from '../../components/ui/Button'

// import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import TablePagination from '@mui/material/TablePagination';


export default function AcessoProduto() {

    const [produtos, setProdutos] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);


    useEffect(() => {
        async function loadProdutos() {
            const response = await api.get("/produto/listagem")
            // console.log(response.data)
            setProdutos(response.data)
        }
        loadProdutos();
    }, [])

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    async function chamaCadastro() {
        event.preventDefault()
        window.location.href = '/produto'
    }

    async function handleDelete(ID_PRODUTO: string) {
        if (confirm("Deseja realmente excluir este produto?")) {
            var result = await api.delete('/produto/delete', {
                params: {
                    ID_PRODUTO: ID_PRODUTO
                }
            })
            if (result.status === 200) {
                window.location.href = '/acesso_produto'

            } else {
                alert('erro')
            }
        }
    }

    return (
        <>
            <Head>
                <title>Metago | Lista de produtos</title>
            </Head>
            <Sidebar />
            <div className={styles.container}>
                <form >
                    <div className={styles.right}>
                        <div className={styles.card}>
                            <div className={styles.bodyTable}><Paper sx={{ width: '100%', overflow: 'hidden' }}>
                                <TableContainer className={styles.tabela} component={Paper} sx={{ maxHeight: 600 }}>
                                    <Table sx={{ minWidth: 650, color: 'white' }} size="small" className={styles.tabela} >
                                        <TableHead >
                                            <TableRow className={styles.paginacao}>
                                                <TableCell>CODIGO</TableCell>
                                                <TableCell>DESCRICAO</TableCell>
                                                <TableCell>DT_CADASTRO</TableCell>
                                                <TableCell align='center'>OPÇÕES</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody >
                                            {produtos.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                                                <TableRow className={styles.row}
                                                    key={row.ID_produto}>
                                                    <TableCell component="th" scope="row">{row.CODIGO}</TableCell>
                                                    <TableCell>{row.DESCRICAO}</TableCell>
                                                    <TableCell>{new Date(row.DT_CADASTRO).toLocaleString('pt-br')}</TableCell>
                                                    <TableCell align='right'>
                                                        <ButtonGroup variant="contained" aria-label="outlined primary button group">
                                                            <Button className={styles.btnAlterar} href={'/produto_editar/' + row.ID_PRODUTO}>Alterar</Button>
                                                            <Button className={styles.btnExcluir} onClick={() => handleDelete(row.ID_PRODUTO)}>Excluir</Button>
                                                        </ButtonGroup>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                                <TablePagination className={styles.paginacao}
                                    rowsPerPageOptions={[10, 25, 100]}
                                    component="div"
                                    count={produtos.length}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    onPageChange={handleChangePage}
                                    onRowsPerPageChange={handleChangeRowsPerPage}
                                />
                            </Paper>
                                <Button40 onClick={() => chamaCadastro()}>Incluir</Button40>
                            </div>
                        </div>

                    </div>
                </form>
            </div>
        </>
    )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {

    return {
        props: {}
    }

})