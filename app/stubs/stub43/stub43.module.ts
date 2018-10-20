import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub43Component} from "./stub43.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub43Component
        }])
    ],
    declarations: [
        Stub43Component
    ]
})
export class Stub43Module {

}
