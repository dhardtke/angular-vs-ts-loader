import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub703Component} from "./stub703.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub703Component
        }])
    ],
    declarations: [
        Stub703Component
    ]
})
export class Stub703Module {

}
