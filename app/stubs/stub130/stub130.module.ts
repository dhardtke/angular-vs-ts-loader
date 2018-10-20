import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub130Component} from "./stub130.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub130Component
        }])
    ],
    declarations: [
        Stub130Component
    ]
})
export class Stub130Module {

}
