import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub344Component} from "./stub344.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub344Component
        }])
    ],
    declarations: [
        Stub344Component
    ]
})
export class Stub344Module {

}
