import React from "react";
import { ItemDocument } from "./ItemDocument";
import Link from "@material-ui/core/Link";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { useStyles } from "./lastDocuments.styles";
const CardComponent = () => {
  const classes = useStyles();
  return (
    <>
      <TableContainer className={classes.tablecard}>
        <Table>
          <TableHead>
            <span className={classes.title}>Ultimos Documentos</span>
            <TableRow>
              <span className={classes.subtitle}>Group:</span>
              <span className={(classes.subtitle, classes.subtitle2)}>
                Support
              </span>
            </TableRow>
          </TableHead>

          {ItemDocument.pages.map((item) => (
            <TableBody>
              <TableRow>
                <TableCell>
                  <p className={classes.itemTitle}>{item.titulo}</p>
                </TableCell>
                <TableCell></TableCell>

                <TableCell align="right">
                  <Link
                    component="button"
                    variant="body2"
                    onClick={() => {
                      console.info("I'm a button.");
                    }}
                    className={classes.link}
                  >
                    View Details
                  </Link>
                  <span className={classes.itemValue}>{item.pag}</span>{" "}
                </TableCell>
              </TableRow>
            </TableBody>
          ))}
        </Table>
      </TableContainer>
    </>
  );
};

export default CardComponent;
