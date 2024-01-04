import { Injectable } from "@angular/core";
import { AngularFireDatabase, QueryFn } from "@angular/fire/database";
import { BehaviorSubject, Observable } from "rxjs";
import { AlertaModel } from "../../model/alertas-model";
import { LoaderService } from "src/app/components/loader/loader.service";
import { NewClass } from "../../model/new-class";
import { AlertasType } from "../../model/alertas-type.enum";

@Injectable({
  providedIn: "root",
})
export class ClassService {
  public responseInsertNewClass = new BehaviorSubject<AlertaModel>(null);
  pathClass = "class";

  constructor(
    private angularFireDataBase: AngularFireDatabase,
    private loader: LoaderService
  ) {}

  insertNewClass(newClass: NewClass): Observable<any> {
    this.loader.openDialog();
    return new Observable((observer) => {
      this.angularFireDataBase
        .list(this.pathClass)
        .push(newClass)
        .then((newClass) => {
          this.responseInsertNewClass.next({
            codigo: "200",
            mensagem: "Cadastro realizado com sucesso.",
            tipo: AlertasType.SUCESSO,
          });
          observer.next();
          this.loader.closeDialog();
        })
        .catch((error) => {
          this.responseInsertNewClass.next({
            codigo: error.code,
            mensagem: "Erro ao incluir nova classe",
            tipo: AlertasType.ERRO,
          });
          observer.next();
          this.loader.closeDialog();
        });
    });
  }

  getListClasses(): Observable<any> {
    return this.angularFireDataBase
      .list(this.pathClass, (ref) => ref.orderByChild("nome"))
      .snapshotChanges();
  }
}
