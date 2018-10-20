import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub947Component} from "./stub947.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub947Component
        }])
    ],
    declarations: [
        Stub947Component
    ]
})
export class Stub947Module {

}
