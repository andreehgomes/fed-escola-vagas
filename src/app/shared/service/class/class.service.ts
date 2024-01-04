import { Injectable } from "@angular/core";
import { AngularFireDatabase, QueryFn } from "@angular/fire/database";
import { BehaviorSubject, Observable } from "rxjs";
import { AlertaModel } from "../../model/alertas-model";
import { LoaderService } from "src/app/components/loader/loader.service";
import { Class, NewClass } from "../../model/new-class";
import { AlertasType } from "../../model/alertas-type.enum";

@Injectable({
  providedIn: "root",
})
export class ClassService {
  public behaviorClasses = new BehaviorSubject<Class>(null);
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

  updateClass(key: string, clas: NewClass): Observable<any> {
    return new Observable((observer) => {
      this.loader.openDialog();
      this.angularFireDataBase
        .list(this.pathClass)
        .update(key, clas)
        .then((update) => {
          this.responseInsertNewClass.next({
            codigo: "200",
            mensagem: "Cadastro atualizado com sucesso.",
            tipo: AlertasType.SUCESSO,
          });
          observer.next();
        })
        .catch((error) => {
          this.responseInsertNewClass.next({
            codigo: error.code,
            mensagem: "Erro ao salvar alteração",
            tipo: AlertasType.ERRO,
          });
          observer.next();
        });
    });
  }

  deleteClass(key: string): Observable<any> {
    this.loader.openDialog();
    return new Observable((observer) => {
      this.angularFireDataBase
        .object(`${this.pathClass}/${key}`)
        .remove()
        .then(() => {
          this.loader.closeDialog();
          observer.next();
        })
        .catch((error) => {
          this.loader.closeDialog();
          console.log("DELETE: ", error);
          throw new Error(
            "Erro ao tentar excluir o produto. Tente novamente mais tarde!"
          );
        });
    });
  }
}
