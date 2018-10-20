import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub451Component} from "./stub451.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub451Component
        }])
    ],
    declarations: [
        Stub451Component
    ]
})
export class Stub451Module {

}
